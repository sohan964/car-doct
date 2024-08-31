import axios from "axios";

export const getServiceDetails = async (id)=>{
    const res = await axios.get(`http://localhost:3000/services/api/${id}`)
    
    return res?.data;
}
