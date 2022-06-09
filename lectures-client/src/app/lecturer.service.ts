import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Language } from 'src/models/language.model';
import { Lecturer } from 'src/models/lecturer.model';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private httpClient: HttpClient) { }

  getLanguages(): Observable<Language[]>{
    return this.httpClient.get<Language[]>(environment.baseURL + 'Languages');
  }
  
  getLectures(): Observable<Lecturer[]>{
    return this.httpClient.get<Lecturer[]>(environment.baseURL + 'Lecturers');
  }

  getLecturesByLanguageId(languageId: number): Observable<Lecturer[]>{
    return this.httpClient.get<any>(environment.baseURL + 'Lecturers/GetByLanguage/' + languageId);
  }
}
