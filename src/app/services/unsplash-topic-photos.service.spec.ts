import { HttpClient } from "@angular/common/http";
import { MockService } from "ng-mocks";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { UnsplashTopicPhotosService } from "./unsplash-topic-photos.service";

const photos = [{
  id: 'randomPhoto1',
  urls: {
    raw: '',
    full: '',
    regular: '',
    small: '',
    thumb: '',
    s3: ''
  },
  likes: 12,
  description: 'Hello Photo',
  user: {
    name: 'user_1'
  }
}, {
  id: 'randomPhoto2',
  urls: {
    raw: '',
    full: '',
    regular: '',
    small: '',
    thumb: '',
    s3: ''
  },
  likes: 1,
  description: 'Hello Photo, You look nice',
  user: {
    name: 'user_2'
  }
}];

const photos$ = of(photos);

describe('UnsplashTopicPhotosService', () => {
  let mockClient: HttpClient;
  let service: UnsplashTopicPhotosService;

  it('should return a list of photos', async () => {
    mockClient = MockService(HttpClient);
    spyOn(mockClient, 'get').and.returnValue(photos$);
    service = new UnsplashTopicPhotosService(mockClient);

    const slug = 'nature';

    service.retrievePhotos(slug);

    expect(mockClient.get).toHaveBeenCalled();
    expect(mockClient.get).toHaveBeenCalledWith(`${environment.unsplash.url}topics/${slug}/photos?page=1&per_page=10&orientation=landscape`);

    service.photos$.subscribe(res => {
      expect(res[0].user).toBe('user_1');
    });
  });

  it('should return an empty list of photos on error', async () => {
    mockClient = MockService(HttpClient);
    spyOn(mockClient, 'get').and.returnValue(of([]));
    service = new UnsplashTopicPhotosService(mockClient);

    const slug = 'nature';

    service.retrievePhotos(slug);

    service.photos$.subscribe(res => {
      expect(res).toEqual([]);
    });
  });

});
