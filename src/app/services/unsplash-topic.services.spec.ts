import { HttpClient } from "@angular/common/http";
import { MockService } from "ng-mocks";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { Topic } from "../models";
import { UnsplashTopicService } from "./unsplash-topic.service";

const topics: Topic[] = [{
  id: 'randomTopic1',
  slug: 'slug_1',
  title: 'Title Here',
  description: 'Some interesting description here',
  visibility: 'featured',
  featured: true,
  total: 22
}, {
  id: 'randomTopic2',
  slug: 'slug_2',
  title: 'Title Here',
  description: 'Some interesting description here',
  visibility: 'featured',
  featured: true,
  total: 4
}];

const topics$ = of(topics);

describe('UnsplashTopicService', () => {
  let mockClient: HttpClient;
  let service: UnsplashTopicService;

  beforeEach(() => {
    mockClient = MockService(HttpClient);
    spyOn(mockClient, 'get').and.returnValue(topics$);
    service = new UnsplashTopicService(mockClient);
  });

  it('should return a list of topics', async () => {
    service.retrieveTopics();

    expect(mockClient.get).toHaveBeenCalled();
    expect(mockClient.get).toHaveBeenCalledWith(`${environment.unsplash.url}topics?page=1&per_page=10`);

    service.topics$.subscribe(res => {
      expect(res[0].slug).toBe('slug_1');
    });
  });

});
