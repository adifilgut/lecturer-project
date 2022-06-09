import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LecturerService } from 'src/app/lecturer.service';
import { Lecturer } from 'src/models/lecturer.model';
import { Language } from 'src/models/language.model';


@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {
  selectedValue = -1;
  displayedColumns: string[] = ['id', 'name', 'email'];
  lectures: Lecturer[]= [];
  languages: Language[] = [];

  constructor(private lecturerService: LecturerService) { }

  ngOnInit(): void {
    //this.getLanguages();
    this.lecturerService.getLanguages()
      .subscribe(languages => this.languages = languages);
  }

  onClick(){ 
    if (this.selectedValue > 0){
      this.lecturerService.getLecturesByLanguageId(this.selectedValue)
        .subscribe(lectures => this.lectures = lectures);
    }
    else{
      
      this.lecturerService.getLectures()
        .subscribe(lectures => this.lectures = lectures);
    }   
  }    
}
