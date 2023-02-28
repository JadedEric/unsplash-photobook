import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Observable, of } from 'rxjs';
import { Topic, Photo } from './models';
import { UnsplashTopicPhotosService, UnsplashTopicService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'UnSplash Photobook';

  public topics$: Observable<Topic[]> = of([]);
  public photos$: Observable<Photo[]> = of([]);

  public topicSelected = false;
  public selectedTopic = '';

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20
  };

  constructor(private topicService: UnsplashTopicService, private topicPhotoService: UnsplashTopicPhotosService) {
    this.topicService.retrieveTopics();
  }

  ngOnInit() {
    this.topics$ = this.topicService.topics$;
  }

  onSelectTopic(topic: Topic): void {
    this.topicSelected = true;
    this.selectedTopic = topic.title;

    this.topicPhotoService.retrievePhotos(topic.slug);

    this.photos$ = this.topicPhotoService.photos$;
  }

  returnToTopics(): void {
    this.topicSelected = false;
    this.selectedTopic = '';

    this.photos$ = of([]);
  }
}
