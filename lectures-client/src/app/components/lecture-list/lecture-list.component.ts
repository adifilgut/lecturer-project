import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

interface Laguage {
  id: number;
  name: string;
}

interface lectures{
  id: number;
  name: string;
  email: string;
  languages: number[];
}

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {
  selectedValue = -1;
  displayedColumns: string[] = ['id', 'name', 'email'];
  lectures: lectures[]= [];
  languages: Laguage[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getLaמguages();
  }

  onClick(){ 
    if (this.selectedValue > 0){
      this.getLecturesByLanguageId();
    }
    else{
      this.getLectures();
    }   
  }    

  getLaמguages(){
    this.httpClient.get<any>(environment.baseURL + 'Languages').subscribe(
      response=>{
        this.languages = response;
        
      }
    )
  }
  
  getLectures(){
    this.httpClient.get<any>(environment.baseURL + 'Lecturers').subscribe(
      response=>{
        this.lectures = response;
      }
    )
  }

  getLecturesByLanguageId(){
    this.httpClient.get<any>(environment.baseURL + 'Lecturers/GetByLanguage/' + this.selectedValue).subscribe(
      response=>{
        this.lectures = response;
      }
    )
  }

}
