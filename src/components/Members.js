import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import axios from "axios";

export default function Members() {
  const url = "https://xivapi.com/freecompany/9229001536389064942?data=FCM";
  const [members, setMembers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getMembers = async () => {
      const response = await axios(url);
      setMembers(response.data);
      console.log(response.data);
      setLoading(false);
    };
    getMembers();
  }, []);

  if (members) {
    return (
      <section className="section">
        {isLoading ? (
          <div className="loading">
            <BarLoader color="#5BBA6F" height={8} width={200} />
          </div>
        ) : (
          <div>
            <h1 className="section-header">Members</h1>
            <div className="member-section">
              {members.FreeCompanyMembers.map((member) => (
                <div className="member-container" key={member.Name}>
                  {" "}
                  <img src={member.Avatar} alt={member.name + "picture"}></img>
                  <div>
                    <img
                      className="member-rank-icon"
                      src={member.RankIcon}
                      alt={member.RankIcon + "icon"}
                    />
                    <h3 className="member-name">{member.Name} </h3>{" "}
                    <h4 className="member-rank">{member.Rank}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}
