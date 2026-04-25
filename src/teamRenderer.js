function generateTeamCard(name, id) {
    const initials = name.split(' ').map(w => w[0]).join('');
    return `<div class="team-card"><div class="avatar">${initials}</div><h4>${name}</h4><span>ID: ${id}</span></div>`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateTeamCard };
}
