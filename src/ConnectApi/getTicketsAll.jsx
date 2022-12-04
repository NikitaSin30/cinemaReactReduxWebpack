import {TICKETS_ALL} from './constans';

export async function getTicketsAll() {
   try {
      const result = await fetch(TICKETS_ALL);
      const response = await result.json();
      return response;
   } catch (error) {
      throw error;
   }
}
