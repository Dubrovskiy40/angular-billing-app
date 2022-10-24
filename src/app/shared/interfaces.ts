export interface ITarif {
	buy_date: string
	end_date: string
	id: number
	message_limit: number
	period: number
	price: number
	start_date: string
	title: string
	user_id: number
}


export interface User {
  username: string
  password: string
}

export interface IProduct {
	id: number,
	title: string,
	price: number,
	period: number,
	message_limit: number
  }
  
  export interface Registration {
	email: string
	username: string
	password: string
  }

  export interface AuthResponse {
	auth_token: "string"
  }

  export interface UserResponse {
	user_id: number
	username: string
	personal_account?: string
  }

  export interface OrderRequest {
	user_id: number
	tariff_id: number
  }