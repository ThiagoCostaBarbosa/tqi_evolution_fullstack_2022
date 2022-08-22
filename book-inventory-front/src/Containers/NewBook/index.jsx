
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import booksApi from "../../Commons/Api/booksApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Main, Content,
  Form,
  ButtonSubmit,
  Input,
  Label,
  FlexCol, Grid2Col, LabelValidation,
} from './style';
import validateNewBook from './validateNewBookForm'

const NewBook = () => {
  const bookProps = {
    // eslint-disable-next-line
    title: "", author: "", image: "", publisher: "", publisherDate: (new Date).getFullYear()
  };

  const [newBook, setNewBook] = useState({ ...bookProps });

  const queryClient = useQueryClient();

  const onSucess = () => queryClient.invalidateQueries("books");

  const methods = {
    save: useMutation(booksApi.save, { onSuccess: onSucess }),
  };

  const api = {
    save: (data) => methods.save.mutate(data),
  };

  const currentYear = (new Date()).getFullYear()

  const validations = {
    title: "", author: "", image: "", publisher: "", publisherDate: ""
  }

  const [labelValidations, setLabelValidations] = useState(validations)

  const validate = (props) => {
    let result = {...validations}
    result.title = validateNewBook.isValidTitle(props.title) ? "" : "O Título precisa ter entre 5 e 250 caracteres"
    result.author = validateNewBook.isValidAuthor(props.author) ? "" : "Precisa ter entre 5 e 100 caracteres"
    result.image = validateNewBook.isValidImage(props.image) ? "" : "Precisa ter o Http ou https na frente. Formatos aceitos: PNG | JPG | JPEG |Webp"
    result.publisher = validateNewBook.isValidPublisher(props.publisher) ? "" : "Precisa ter entre 5 e 100 caracteres"
    result.publisherDate = validateNewBook.isValidPublisherDate(props.publisherDate) ? "" : "Ano inválido"

    const hasError = Object.keys(result)
      .filter((key) => result[key] !== "")
      .length > 0
    return [result, hasError]
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const [validationResult, hasError] = validate(newBook)
    setLabelValidations(validationResult)

    if (!hasError){
      api.save({ ...newBook });
      setNewBook({ ...bookProps, id: 1 })
    };
  };

  let content = (
    <Form onSubmit={handleSubmit}>
      <h2>Cadastro de Livro</h2>
      <div>
        <FlexCol>
          <div>
            <Label>Título</Label>
            <Input
              type="text"
              id="title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              placeholder="Insira o Título"
              required
            />
            <LabelValidation>{labelValidations.title}</LabelValidation>
          </div>
          <div>
            <Label>Autor</Label>
            <Input
              type="text"
              id="author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              placeholder="Insira o Autor"
              required
            />
            <LabelValidation>{labelValidations.author}</LabelValidation>
          </div>
          <div>
            <Label>Imagem</Label>
            <Input
              type="text"
              id="image"
              value={newBook.image}
              onChange={(e) =>
                setNewBook({ ...newBook, image: e.target.value })
              }
              placeholder="Insira a URL da imagem"
              required
            />
            <LabelValidation>{labelValidations.image}</LabelValidation>
          </div>
        </FlexCol>
        <Grid2Col>
          <div>
            <Label>Editora</Label>
            <Input
              type="text"
              id="publisher"
              value={newBook.publisher}
              onChange={(e) =>
                setNewBook({ ...newBook, publisher: e.target.value })
              }
              placeholder="Insira a Editora"
              required
            />
            <LabelValidation>{labelValidations.publisher}</LabelValidation>
          </div>
          <div>
            <Label>Ano da Publicação</Label>
            <Input
              type="number"
              id="publisherDate"
              min="1900" max={currentYear}
              value={newBook.publisherDate}
              onChange={(e) =>
                setNewBook({ ...newBook, publisherDate: e.target.value })
              }
            />
            <LabelValidation>{labelValidations.publisherDate}</LabelValidation>
          </div>
        </Grid2Col>

      <ButtonSubmit>Salvar
        <FontAwesomeIcon icon={faSave} />
      </ButtonSubmit>
      </div>
    </Form>
  )

  return (
    <Main>
      <Content>
        {content}
      </Content>
    </Main>
  );

};

export default NewBook;
