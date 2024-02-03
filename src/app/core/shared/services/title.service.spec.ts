import { TestBed } from '@angular/core/testing';

import { TitleService } from './title.service';

fdescribe('TitleService', () => {
  let service: TitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleService);
  });

  it('The default Title should be equal to RP music', () => {
    const title: string = service.getTitle();
    const initialTitle: string = "RP music";
    expect(title).toEqual(initialTitle);
  });

  it("If The title is change by other then the title should be updated", () => {
    const newTitle: string = "Login";
    service.setTitle(newTitle);
    const title_service = service.getTitle();
    expect(title_service).toEqual(newTitle);
  });
});
