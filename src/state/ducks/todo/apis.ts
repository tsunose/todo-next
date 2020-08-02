import axios from 'axios'
// import { v4 as uuid } from 'uuid';
export const client = axios.create({
  timeout: 2000,
})

export const API_TODO = `${process.env.API_URL}/v1/todos`

export const getTodos = () => client.get(API_TODO)

// MOCK
// export const getTodos = () => {
//   return [
//     {
//       id: 1,
//       content: 'テストTODO',
//       is_end: false, // eslint-disable-line
//       deleted_at: '2020-08-02 00:00:00', // eslint-disable-line
//     },
//     {
//       id: 2,
//       content: 'テストTODO2',
//       is_end: false, // eslint-disable-line
//       deleted_at: '2020-08-03 00:00:00', // eslint-disable-line
//     },
//   ]
// }

export const createTodo = (content) => client.post(API_TODO, {content});

// MOCK
// export const createTodo = (content) => {
//   return {
//     id: uuid(),
//     content: content,
//     is_end: false, // eslint-disable-line
//     deleted_at: '2020-08-03 00:00:00', // eslint-disable-line
//   }
// }
