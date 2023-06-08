import axios from "axios";
// service это отдельный файл с логикой получения чегото
const getPlanes = async () => {
  const planes = await axios.get("/api/planes");
  return planes.data;
};
const planesService = {
  getPlanes,
};
export default planesService;
