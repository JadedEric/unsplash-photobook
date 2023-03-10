import { HttpClient } from "@angular/common/http";
import { MockService } from "ng-mocks";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { UnsplashTopicService } from "./unsplash-topic.service";

const topics = [{
  id: 'randomTopic1',
  slug: 'slug_1',
  title: 'Title Here',
  description: 'Some interesting description here',
  visibility: 'featured',
  featured: true,
  total: 22,
  cover_photo: {
    urls: {
      small: ''
    }
  }
}, {
  id: 'randomTopic2',
  slug: 'slug_2',
  title: 'Title Here',
  description: 'Some interesting description here',
  visibility: 'featured',
  featured: true,
  total: 4,
  cover_photo: {
    urls: {
      small: ''
    }
  }
}];

const topics$ = of(topics);

describe('UnsplashTopicService', () => {
  let mockClient: HttpClient;
  let service: UnsplashTopicService;

  it('should return a list of topics', async () => {
    mockClient = MockService(HttpClient);
    spyOn(mockClient, 'get').and.returnValue(topics$);
    service = new UnsplashTopicService(mockClient);

    service.retrieveTopics();

    expect(mockClient.get).toHaveBeenCalled();
    expect(mockClient.get).toHaveBeenCalledWith(`${environment.unsplash.url}topics?page=1&per_page=10`);

    service.topics$.subscribe(res => {
      expect(res[0].slug).toBe('slug_1');
    });
  });

  it('should return an empty list of topics on error', async () => {
    mockClient = MockService(HttpClient);
    spyOn(mockClient, 'get').and.returnValue(of([]));
    service = new UnsplashTopicService(mockClient);

    service.retrieveTopics();

    expect(mockClient.get).toHaveBeenCalled();
    expect(mockClient.get).toHaveBeenCalledWith(`${environment.unsplash.url}topics?page=1&per_page=10`);

    service.topics$.subscribe(res => {
      expect(res).toEqual([]);
    });
  });

});
