export class Photo {
  public id = '';
  public urls: PhotoUrl | undefined;
  public likes = -1;
  public description = '';
  public user = '';
}

export class PhotoUrl {
  public raw = '';
  public full = '';
  public regular = '';
  public small = '';
  public thumb = '';
  public s3 = '';
}
