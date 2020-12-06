import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { INews } from '../interfaces/news.interface';
import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsCollection: AngularFirestoreCollection<INews>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angulatFireStorage: AngularFireStorage
  ) {
    this.newsCollection = angularFirestore.collection<INews>('noticias');
   }

   getAllNews(): Observable<INews[]> {
    return this.newsCollection.valueChanges({idField: '_id'});
  }

  addTeacher(news: INews): Promise<DocumentReference<INews>> {
    return this.newsCollection.add(news);
  }

async uploadFile(path: string, data: any): Promise<any> {
    await this.angulatFireStorage.upload(path, data); // (profile/my-file.png , archivo)
    return await this.angulatFireStorage.ref(path).getDownloadURL().toPromise();
  }
}
