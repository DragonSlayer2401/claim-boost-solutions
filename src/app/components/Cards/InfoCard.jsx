import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import './card.css';

const InfoCard = ({ title, body, icon }) => {
  return (
    <>
      <Card className="rounded-lg p-5 border-none" id="infoCard">
        {icon}
        <CardBody>
          <CardTitle as="h3" className="text-center font-bold text-2xl !mb-4">
            {title}
          </CardTitle>
          <CardText className="text-center text-lg">{body}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default InfoCard;
