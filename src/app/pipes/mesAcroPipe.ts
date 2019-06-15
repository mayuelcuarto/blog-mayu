import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'mesAcro'})
export class MesAcroPipe implements PipeTransform{
	transform(value):string{
		switch (value) {
			case 1:
			return "Ene";
			break;

			case 2:
			return "Feb";
			break;

			case 3:
			return "Mar";
			break;

			case 4:
			return "Abr";
			break;

			case 5:
			return "May";
			break;

			case 6:
			return "Jun";
			break;

			case 7:
			return "Jul";
			break;

			case 8:
			return "Ago";
			break;

			case 9:
			return "Set";
			break;

			case 10:
			return "Oct";
			break;

			case 11:
			return "Nov";
			break;

			case 12:
			return "Dic";
			break;
			
			default:
			// code...
			break;
		}
	}
}