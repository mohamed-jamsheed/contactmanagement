import { Component, OnInit } from '@angular/core';
import { Mycontact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  allContacts:Mycontact[]=[]
  searchKey:string=''
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getallContacts().subscribe((data:any)=>{
      console.log(data);
      this.allContacts=data
    })
  }

  //search
  search(event:any){
    console.log(event.target.value);
    this.searchKey = event.target.value
  }

}
