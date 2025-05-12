import axios, { AxiosResponse } from 'axios';

// Устанавливаем URL API
// const API_URL = import.meta.env.BASE_URL as string;
// Эндпоинты для работы с пользователями
// const loginEndpoint = `${API_URL}api/v1/account/login`;
const loginEndpoint = `https://gateway.scan-interfax.ru/api/v1/account/login`;

type TAuth = {
  login: string,
  password: string
  }
  
  type TToken = {
    accessToken: string,
    expire: string
  }


export const loginAxios = async (
  data: TAuth
): Promise<TToken|any> => {
  try {
  const response: AxiosResponse<TToken> = await axios({
      url: loginEndpoint,
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  return response.data
  } catch (err: any) {
    if (err.response.data.message.includes("Неправильное имя или пароль")) {
      throw new Error("Неправильное имя или пароль");
    } else {
      throw new Error(err);
    }   
  }
};


export type {TAuth, TToken}