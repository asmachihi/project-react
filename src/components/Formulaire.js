import {Form,Button} from "react-bootstrap"


function Formulaire(){
    return(
<Form className={`$fomul`}>
  <Form.Row>
    <Form.Group as="Col" controlId="formGridEmail">
      <Form.Label>Votre adresse E-mail</Form.Label>
      <Form.Control type="email" placeholder="Enter votre e-mail" />
    </Form.Group>

    <Form.Group as="Col" controlId="formGridPassword">
      <Form.Label>Votre Mot de passe</Form.Label>
      <Form.Control type="Password" placeholder="mot-de-passe" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Votre addresse</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Votre deuxième addresse </Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as="Col" controlId="formGridCity">
      <Form.Label>Cité</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as="Col" controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choisissez...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as="Col" controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Je ne suis pas robot !" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Envoyer
  </Button>
  <Button variant="primary" type="reset">
    Annuler
  </Button>
</Form>
)
}

export default Formulaire