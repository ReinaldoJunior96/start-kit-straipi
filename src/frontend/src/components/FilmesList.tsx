import React, { useEffect, useState } from 'react';
  import {api} from '../api/axios';

type Filme = {
	id: number;
	documentId: string;
	titulo: string;
	capa?: {
		formats?: {
			thumbnail?: { url: string };
			medium?: { url: string };
			large?: { url: string };
		};
		url?: string;
	};
};

const getImageUrl = (capa?: Filme['capa']): string | null => {
	if (!capa) return null;
	if (capa.formats?.thumbnail) return `http://localhost:1337${capa.formats.thumbnail.url}`;
	if (capa.formats?.medium) return `http://localhost:1337${capa.formats.medium.url}`;
	if (capa.formats?.large) return `http://localhost:1337${capa.formats.large.url}`;
	if (capa.url) return `http://localhost:1337${capa.url}`;
	return null;
};

const FilmesList: React.FC = () => {
	const [filmes, setFilmes] = useState<Filme[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
			api.get('/filmes?populate=*')
				.then((res: any) => {
				setFilmes(res.data.data);
      
				setLoading(false);
			})
			.catch(() => {
				setError('Erro ao carregar filmes');
				setLoading(false);
			});
	}, []);

	if (loading) return <div className="text-center mt-10 text-lg">Carregando...</div>;
	if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

	return (
		<div className="max-w-4xl mx-auto py-10 bg-red-300">
			<h1 className="text-3xl bg-red-300 font-bold mb-8 text-center">Filmes</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{filmes.map(filme => {
					const imageUrl = getImageUrl(filme.capa);
					return (
						<div key={filme.id} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
							{imageUrl ? (
								<img
									src={imageUrl}
									alt={filme.titulo}
									className="mb-4 rounded shadow w-32 h-48 object-cover"
								/>
							) : (
								<div className="mb-4 w-32 h-48 bg-gray-200 flex items-center justify-center rounded">Sem imagem</div>
							)}
							<h2 className="text-xl font-semibold text-gray-800 mb-2">{filme.titulo}</h2>
							<span className="text-sm text-gray-500">ID: {filme.documentId}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilmesList;
