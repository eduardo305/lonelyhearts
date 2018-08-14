
export class User {
  public id: Id;
  public name: Name;
  public picture: Picture;
  public nat: string;
  public gender: string;
  public email: string;
  public phone: string;

  constructor({ id, name, picture, nat, gender, email, phone }) {
    this.id = new Id(id);
    this.name = new Name(name);
    this.picture = new Picture(picture);
    this.nat = nat;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
  }

  getFullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  getLargeImage() {
    return this.picture.getLarge();
  }

  getMediumImage() {
    return this.picture.getMedium();
  }

  getThumbnailImage() {
    return this.picture.getThumbnail();
  }
}

class Name {
  public title: string;
  public first: string;
  public last: string;

  constructor({ title, first, last }) {
    this.title = title;
    this.first = first;
    this.last = last;
  }
}

class Id {
  public name: string;
  public value: string;

  constructor({ name, value }) {
    this.name = name;
    this.value = value;
  }
}

class Picture {
  private large: string;
  private medium: string;
  private thumbnail: string;

  constructor({ large, medium, thumbnail }) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
  }

  getLarge(): string {
    return this.large;
  }

  getMedium(): string {
    return this.medium;
  }

  getThumbnail(): string {
    return this.thumbnail;
  }
}
