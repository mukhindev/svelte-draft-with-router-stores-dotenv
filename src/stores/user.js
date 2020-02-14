import { writable } from 'svelte/store'
import request from '../modules/request'

/* Это хранилище не используется в черновике, а служит лишь для примера.
Подразумевается, что у нас есть страница входа, к примеру Login.svelte,
результом работы которой будет помещение в локальное хранилище браузера
токена с ключом token */

// Получаем из локального хранилища браузера значение token
const localToken = localStorage.getItem('token')

// Создаём перезаписываемое состояние token в хранилище
const token = writable(localToken)

// Данная функция вызывается когда нужно проверить токен
const checkToken = async () => {
  // Запрос к серверу на проверку (токен находится в заголовке запроса)
  const json = await request.post('check-token')
  // Если ответ не соответствует { ok: true }
  if (!json.ok) {
    // Токен удаляется из локального хранилища
    localStorage.removeItem('token')
    // Переброс на страницу Login.svelte
    if (window.location.pathname !== '/login') window.location = '/login'
  }
}

/* Чтобы проверять токен на каждом переходе, checkToken() можно вызывать
при срабатывании роутера */

export {
  token,
  checkToken
}
