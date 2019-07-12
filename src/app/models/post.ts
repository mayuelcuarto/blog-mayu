export interface PostInterface{
	id?: string;
	titulo?: string;
	portada?: string;
	autor?: string;
	video?: string;
	fecha?: any;
	fechaDay?: number;
	fechaMonth?: number;
	fechaYear?: number;
	categoria?: string;
	destacado?: boolean;
	card?: string;
	introduccion?: string;
	descripcion?: string;
	userUid ?: string;
	createdAt?: Date;
	temp?: string;
	videoCierre?: string;
	msgVideoCierre?: string;
}