import { useParams } from "react-router-dom";
import teamMembers from "./HomeData";

const TeamDetails = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === Number(id));

  if (!member) {
    return <h4 className="text-danger">Member not found</h4>;
  }

  return (
    <div className="card p-4 shadow-sm">
      <img
        src={member.img}
        alt={member.name}
        className="rounded-circle mx-auto mb-3"
        style={{
          width: "140px",
          height: "140px",
          objectFit: "cover",
          border: "4px solid #0d6efd",
        }}
      />

      <h3 className="fw-bold">{member.name}</h3>
      <p className="text-muted">{member.role}</p>

      <p className="mt-3">{member.description}</p>
    </div>
  );
};

export default TeamDetails;
