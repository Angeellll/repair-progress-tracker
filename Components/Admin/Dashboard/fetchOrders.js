const API_BASE_URL = "/api/getAllOrders"; // Update the API endpoint

const fetchOrders = async () => {
  try {
    const response = await fetch(API_BASE_URL); // Make the API call to the correct endpoint
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error retrieving orders:", response.statusText);
      return {};
    }
  } catch (error) {
    console.error("Error retrieving orders:", error);
    return {};
  }
};

export default fetchOrders;
