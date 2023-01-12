import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[], searchkey:string,propName:string): any [] {
    const result:any = []
    if(!allContacts || searchkey=='' || propName==''){
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(contact)
      }
    })

    return result;
  }

}
