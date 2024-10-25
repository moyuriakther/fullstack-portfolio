import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../services/api/apiSlice";
// import { blogsinfos } from "../data/blog";


const BlogDetail = () => {
  const {id} = useParams()
  const {data} = useGetBlogByIdQuery(id)

    return (
        <Container>
        <div className="p-4">
          <div className="mt-4 blog-card blog-detail-container p-6 lg:p-12 max-w-4xl mx-auto shadow-lg rounded-md">
            {/* Blog Title */}
            <h1 className="blog-title">Title: {data?.data?.title}</h1>
  
            {/* Blog Meta Info */}
            <div className="blog-meta">
              Published on {new Date(data?.data?.createdAt).toLocaleDateString()}
            </div>
  
            {/* Blog Content */}
            <article
              className="prose lg:prose-xl prose-slate max-w-none blog-description mt-6"
              dangerouslySetInnerHTML={{ __html: data?.data?.description }}
            />
          </div>
        </div>
      </Container>
    );
};

export default BlogDetail;