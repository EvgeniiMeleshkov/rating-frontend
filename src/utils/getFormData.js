export default function getFormData (target) {
  const formData = new FormData(target)
  return Object.fromEntries(formData.entries()) 
}