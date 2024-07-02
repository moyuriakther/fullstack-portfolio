import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const BlogCard = ({blog}) => {
    const navigate = useNavigate()
    
    const handleViewDetails = (blogId) => {
        navigate(`/${blogId}/blog`);
      };
      
    return (
        <Col xs={12} sm={6} md={4} lg={3} key={blog.id} className="project-card">
        <Card className="mb-4 project-card-view" style={{ cursor: 'pointer' }}>
          {/* <Card.Img variant="top" src="https://via.placeholder.com/150" alt={blog.title} /> */}
          <Card.Body>
            <Card.Title>{blog?.title}</Card.Title>
            <Card.Text>{blog?.description.substring(0, 100) + '...'}</Card.Text>
            <Button variant="primary" onClick={() => handleViewDetails(blog?.id)} className="mt-auto">
              View Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default BlogCard;