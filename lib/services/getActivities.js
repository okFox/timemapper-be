


export default getActivities = () => {
  return fetch(process.env.MONGODB_URI);
}