import React, {useState} from 'react';
import {
  Main,
  Content,
  Form,
  Image,
  Title,
  Author,
  Info,
  Publisher,
  Input,
  Label,
  LabelValidation
} from './style';
import {useLocation} from 'react-router-dom';
import {useMutation, useQueryClient} from 'react-query';
import ordersApi from '../../Commons/Api/ordersApi';
import validateNewOrder from './validateNewOrder';
import {ButtonSubmit} from '../NewBook/style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import formatStringByPattern from 'format-string-by-pattern';

const NewOrder = () => {

  const { state: book = {} } = useLocation();

  const orderProps = {bookId: book.id, amount: 0, uniteValue: 0, name: "", document:""};

  const [newOrder, setNewOrder] = useState({ ...orderProps });
  const queryClient = useQueryClient();

  const onSucess = () => queryClient.invalidateQueries("orders");
  const methods = {
    save: useMutation(ordersApi.save, { onSuccess: onSucess }),
  };
  const api = {
    save: (data) => methods.save.mutate(data),
  };

  const validations = {amount: "", uniteValue: "", name: "", document:""}


  const [labelValidations, setLabelValidations] = useState(validations)


  const validate = (props) => {
    let result = {...validations}
    result.amount = validateNewOrder.isValidAmount(props.amount) ? "" : "O valor não pode ter notação científica"
    result.uniteValue = validateNewOrder.isValidUniteValue(props.uniteValue) ? "" : "O valor não pode ter notação científica"
    result.name = validateNewOrder.isValidName(props.name) ? "" : "O Nome precisa ter entre 5 e 250 caracteres"
    result.document = validateNewOrder.isValidDocument(props.document, doc.pattern) ? "" : `Precisa estar no padrão: ${doc.pattern}`
    const hasError = !([result.amount, result.uniteValue, result.name, result.document ].every(e => e === ""))
    return [result, hasError]
  }

  const patternDoc = [{ type: "CPF", pattern: "XXX.XXX.XXX-XX" },
    { type: "CNPJ", pattern: "XX.XXX.XXX/XXXX-XX" }]

  const [doc, setDoc] = useState(patternDoc[0]);

  const fieldChange = {
    amount: (value) => {
      setNewOrder({ ...newOrder, amount: value })
    },
    uniteValue: (value) => {
      setNewOrder({ ...newOrder, uniteValue: value })
    },
    name: (value) => {
      setNewOrder({ ...newOrder, name: value })
    },
    document: (value) => {
      const onlyNumbers = value.replace(/\D/g, '');
      const isCNPJ = onlyNumbers.length > 11
      const docType = patternDoc[Number(isCNPJ)]
      setDoc(docType)
      const formatted = formatStringByPattern(doc.pattern,onlyNumbers)
      setNewOrder({ ...newOrder, document: formatted })
    },
  }

  const onChangeForm = (field, value) => fieldChange[field](value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const [validationResult, hasError] = validate(newOrder)
    setLabelValidations(validationResult)

    if (!hasError){
      const formatted = {
        amount: Number (newOrder.amount) ,
        uniteValue: Number(newOrder.uniteValue),
        document: newOrder.document.replace(/\D/g, '')
    }

      api.save({ ...newOrder, ...formatted });
      setNewOrder({ ...orderProps })
    };
  };

  let content = (
    <Form onSubmit={handleSubmit}>
      <h2>Cadastro de Venda</h2>
      <div>
        <Image src={book.image} />
        <Info>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          <div>
            <div>{book.publisherDate}</div>
            <Publisher>{book.publisher}</Publisher>
          </div>
          <div>
            <div>
              <Label>Quantidade</Label>
              <Input
                type="number"
                id="amount"
                min="1"
                value={newOrder.amount}
                onChange={(e) => onChangeForm("amount", e.target.value) }
              />
              <LabelValidation>{labelValidations.amount}</LabelValidation>
            </div>
            <div>
              <Label>Preço</Label>
              <Input
                type="number"
                id="uniteValue"
                min="0.01"
                step="0.01"
                value={newOrder.uniteValue}
                onChange={(e) => onChangeForm("uniteValue", e.target.value) }
              />
              <LabelValidation>{labelValidations.uniteValue}</LabelValidation>
            </div>
          </div>
          <div>
            <div>
              <Label>Nome do Cliente</Label>
              <Input
                type="text"
                id="name"
                value={newOrder.name}
                onChange={(e) => onChangeForm("name", e.target.value) }
              />
              <LabelValidation>{labelValidations.name}</LabelValidation>
            </div>
            <div>
              <Label>{doc.type}:</Label>
              <Input
                type="text"
                id="document"
                value={newOrder.document}
                onChange={(e) => onChangeForm("document", e.target.value) }
              />
              <LabelValidation>{labelValidations.document}</LabelValidation>
            </div>
          </div>
          <ButtonSubmit>Salvar
            <FontAwesomeIcon icon={faSave} />
          </ButtonSubmit>
        </Info>
      </div>
    </Form>
  );

  return (
    <Main>
      <Content>
        {content}
      </Content>
    </Main>
  );
};

export default NewOrder;
