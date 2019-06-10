export interface Roles{
	simpleUser?: boolean;
	editor?: boolean;
	admin?: boolean;
}

export interface UserInterface{
	id?: string;
	name?: string;
	email?: string;
	password?: string;
	photoUrl?: string;
	roles: Roles;
}