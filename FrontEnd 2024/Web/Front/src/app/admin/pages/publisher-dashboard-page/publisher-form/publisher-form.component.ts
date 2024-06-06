import { Component, Input, OnInit } from '@angular/core';
import { Publisher, createPublisherDTO } from 'src/app/models/publisher/publisher-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PublisherDashboardService } from 'src/app/admin/services/publisher/publisher-dashboard.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.css']
})
export class PublisherFormComponent implements OnInit {

  @Input() publisherId: string | number = '';
  @Input() action: 'create' | 'edit' | 'delete' = 'create';

  newPublisher!: createPublisherDTO;
  publisherForm!: FormGroup;
  publisher!: Publisher;

  isDeleteForm: boolean = false;

  errorMessages = {
    name: [
      { type: 'required', message: '' },
      { type: 'maxlength', message: '' }
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private publisherService: PublisherDashboardService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.isDeleteForm = this.action === 'delete';

    this.loadTranslations();
    this.createForm();

    if (this.publisherId) {
      this.getPublisherById();
    }
  }

  loadTranslations() {
    this.translate.get('mensajes_de_errores').subscribe(translations => {
      this.errorMessages = {
        name: [
          { type: 'required', message: translations.campo_requerido },
          { type: 'maxlength', message: translations.error_80_caracteres }
        ]
      };
    });
  }

  getPublisherById() {
    this.publisherService.getPublisherById(this.publisherId)
      .subscribe((result: Publisher) => {
        this.publisher = result;
        this.publisherForm.get('name')?.setValue(this.publisher.name);
      });
  }

  onSaveHandle(event: Event) {
    event.preventDefault();
    this.publisherForm.markAllAsTouched();

    if (this.publisherForm.valid) {
      if (this.action === 'create') {
        this.saveNewPublisher();
      }

      if (this.action === 'edit') {
        this.saveUpdatePublisher();
      }
    }
  }

  saveNewPublisher() {
    this.newPublisher = {
      name: this.publisherForm.value.name as string,
    };

    this.publisherService.savePublisher(this.newPublisher)
      .subscribe((result: Publisher) => {
        if (result) {
          this.activeModal.close(true);
        }
      });
  }

  saveUpdatePublisher() {
    this.publisher.name = this.publisherForm.value.name as string;

    this.publisherService.updatePublisher(this.publisher)
      .subscribe((result: Publisher) => {
        if (result) {
          this.activeModal.close(true);
        }
      });
  }

  onConfirmDelete() {
    this.publisherService.deletePublisher(this.publisherId)
      .subscribe(() => {
        this.activeModal.close(true);
      });
  }

  onClose() {
    this.activeModal.close(false);
  }

  createForm() {
    this.publisherForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
    });
  }

  get name() {
    return this.publisherForm.get('name');
  }
}
