import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorDashboardService } from 'src/app/admin/services/author/author-dashboard.service';
import { Author, createAuthorDTO } from 'src/app/models/author/author-model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  @Input() authorId: string | number = '';
  @Input() action: 'create' | 'edit' | 'delete' = 'create';

  newAuthor!: createAuthorDTO;
  authorForm!: FormGroup;
  author!: Author;

  isDeleteForm: boolean = false;

  errorMessages: any = {};

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private authorService: AuthorDashboardService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.isDeleteForm = this.action === 'delete';

    this.createForm();

    if (this.authorId) {
      this.getAuthorById();
    }

    this.setErrorMessages();
  }

  getAuthorById() {
    this.authorService.getAuthorById(this.authorId)
      .subscribe((result: Author) => {
        this.author = result;
        this.authorForm.get('name')?.setValue(this.author.name);
      });
  }

  onSaveHandle(event: Event) {
    event.preventDefault();
    this.authorForm.markAllAsTouched();

    if (this.action === 'create') {
      this.saveNewAuthor();
    }

    if (this.action === 'edit') {
      this.saveUpdateAuthor();
    }
  }

  saveNewAuthor() {
    this.newAuthor = {
      name: this.authorForm.value.name as string,
    };

    this.authorService.saveAuthor(this.newAuthor)
      .subscribe((result: Author) => {
        let author: Author = result;

        if (author) {
          this.activeModal.close(true);
        }
      });
  }

  saveUpdateAuthor() {
    this.author.name = this.authorForm.value.name as string;

    this.authorService.updateAuthor(this.author)
      .subscribe((result: Author) => {
        let author: Author = result;

        if (author) {
          this.activeModal.close(true);
        }
      });
  }

  onConfirmDelete() {
    this.authorService.deleteAuthor(this.authorId)
      .subscribe(() => {
        this.activeModal.close(true);
      });
  }

  onClose() {
    this.activeModal.close(false);
  }

  createForm() {
    this.authorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]]
    });
  }

  get name() {
    return this.authorForm.get('name');
  }

  setErrorMessages() {
    this.errorMessages = {
      name: [
        { type: 'required', message: this.translate.instant('mensajes_de_errores.campo_requerido') },
        { type: 'maxlength', message: this.translate.instant('mensajes_de_errores.error_80_caracteres') }
      ],
    };
  }
}
