export class CreatePostDto {
  title: string;
  description: string;
  img: string;
  uid: string;
}

export class UpdatePostDto {
  title: string;
  description: string;
  img: string;
  uid: string;
}

export class ListAllEntries {
  id: number;
  description: string;
  img: string;
  uid: string;
}
