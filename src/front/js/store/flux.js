const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

		},
		actions: {

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			submitContactForm: async (formData) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/contact-us", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: formData.email,
							comment: `Name: ${formData.name}\n\nMessage: ${formData.message || formData.comment}\n\nAreas of Interest:\n${formData.interests ? formData.interests.join("\n") : ""}`
						})
					});

					const data = await response.json();

					if (!response.ok) {
						throw new Error(data.message || "Failed to send message");
					}

					return { success: true, message: data.message || "Thank you for your message! We'll get back to you soon." };
				} catch (error) {
					return { success: false, message: error.message || "Something went wrong. Please try again." };
				}
			}

		}
	};
};

export default getState;
