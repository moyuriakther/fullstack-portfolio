import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../services/api/apiSlice";


const BlogDetail = () => {
  const {id} = useParams()
  const {data} = useGetBlogByIdQuery(id)
    return (
        <Container className="blog-container">
        <Row>
            <Col key={data?.data?.id} className="mb-4 blog-card">
                <Card className=" blog-detail-view ">
                    <Card.Body>
                        <Card.Title className="blog-title">{data?.data?.title}</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: data?.data?.description }} className="blog-description" />
                        <Card.Text className="blog-meta">
                            {new Date(data?.data?.createdAt).toDateString()}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default BlogDetail;