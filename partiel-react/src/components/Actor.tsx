import { CastMember } from "../services/ApiClient";

type ActorProps = {
    actor: CastMember;
};

export default function Actor({ actor }: ActorProps) {
    return (
        <div className="actor saveMe">
            <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`} alt="" />
            <h4>{actor.original_name}</h4>
            <span>{actor.character}</span>
        </div>
    );
}