import Chat from '../class/chat';
import { chat } from './chatData.js';

export function guardarChatFromForm(data) {
  let flagError = false;
  const msgErrorParametros = 'Parámetros no validos';

  if (data.mail === undefined || data.mail === '') {
    flagError = true;
  }

  if (data.mensaje === undefined || data.mensaje === '') {
    flagError = true;
  }


  if (data.hora === undefined || data.hora === '') {
    flagError = true;
  }

  if (flagError) {
    return 400;
  } else {
    const objChat = new Chat(
      data.mail,
      data.mensaje,
      data.hora,
    );
    chat.push(objChat);
    return 200;
  }
}