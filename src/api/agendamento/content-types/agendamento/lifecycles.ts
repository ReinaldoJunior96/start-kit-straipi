export default {
  async beforeCreate(event) {
    const { data } = event.params;
    // Pega o id da unidade (primeiro do array connect ou set)
    const unidadeObj = data.unidade?.connect?.[0] || data.unidade?.set?.[0];
    const unidadeId = unidadeObj?.id;

    if (!unidadeId) return; // Se não tem unidade, não valida

    const existe = await strapi.db.query('api::agendamento.agendamento').findOne({
      where: { unidade: { id: unidadeId } }
    });
    if (existe) {
      throw new Error('Já existe um agendamento para essa unidade!');
    }
  },
};