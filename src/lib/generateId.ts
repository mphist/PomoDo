import { v4 as uuidv4 } from 'uuid'
export default function generateId() {
  const uniqueId = uuidv4()
  return uniqueId.slice(0, 8)
}
