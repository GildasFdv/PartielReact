import { useQuery } from "@tanstack/react-query";
import useApiClient from "../services/ApiClientProvider";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

export default function SearchContainer() {
    const apiClient = useApiClient();
    const navigate = useNavigate();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["trend"],
        queryFn: () => apiClient.getDataByTrending('all', 'day')
    });

    const [isInputActive, setIsInputActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const backgroundImage = useMemo(() => {
        if (isSuccess && data && data.length > 0) {
            const first = data[0];

            return "https://image.tmdb.org/t/p/w500" + first.backdrop_path || first.poster_path;
        }
        return "./thor.jpg";
    }, [isSuccess, data]);

    const filteredData = useMemo(() => {
        if (!searchQuery) return data;
        return data?.filter(m => m.title?.toLowerCase()?.includes(searchQuery.toLowerCase()));
    }, [searchQuery, data]);

    const handleFilmClick = (id: string) => {
        navigate(`/detail/${id}/movie`);
    };

    return (
        <div className="search-container saveMe" style={{ background: `url(${backgroundImage})` }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                zIndex: 100
            }}>
                <input
                    type="text"
                    placeholder="Rechercher un film"
                    onInput={() => setIsInputActive(true)}
                    onBlur={() => setIsInputActive(false)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>
            {isInputActive && (
                <div className="active-input-div" style={{
                    position: 'relative',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    left: 0,
                    right: 0,
                    height: 200,
                    width: '60%',
                    overflowY: 'scroll',
                    overflow: 'hidden',
                }}>
                    {
                        filteredData &&
                        filteredData.map((m, index) => (
                            <div
                                key={index}
                                style={{ padding: 10, borderBottom: '1px solid white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
                                onClick={() => handleFilmClick(m.id.toString())}
                            >
                                <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} height={20} width={20}/>
                                {m.title}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
}