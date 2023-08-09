/* eslint-disable prettier/prettier */

import { alphaVantageApi } from "../config/AlphaVantageApi/axiosAlphaVantage";


export async function getInvestmentByName(name : string) {
    try {
      
        const response = await alphaVantageApi.get('', {
          params: {
            function: 'GLOBAL_QUOTE',
            symbol: name,
            apikey:"MARAEQTHHUDW2NMJ"
          },
        });
        
        return response.data;
      } catch (error) {
        
        throw new Error(error) 
      }
}
