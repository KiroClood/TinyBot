const nodeosu = require('node-osu');
const get_mode_detail = require('./get_mode_detail')

let osuApi = new nodeosu.Api(process.env.OSU_KEY, {
    notFoundAsError: false,
    completeScores: true
});

module.exports = async function (beatmapID, mode) {
    let modenum = get_mode_detail(mode).modenum
    let beatmap = await osuApi.getBeatmaps({b: beatmapID, m: modenum, a: 1})
    return {
        beatmapid: Number(beatmap[0].id),
        title: beatmap[0].title,
        creator: beatmap[0].creator,
        diff: beatmap[0].version,
        bpm: Number(beatmap[0].bpm),
        approvalStatus: beatmap[0].approvalStatus,
        beatmapsetID: Number(beatmap[0].beatmapSetId),
        fc: Number(beatmap[0].maxCombo),
        star: Number(beatmap[0].difficulty.rating),
        timetotal: Number(beatmap[0].length.total),
        timedrain: Number(beatmap[0].length.drain),
        favorite: Number(beatmap[0].counts.favorites),
        source: beatmap[0].source,
        artist: beatmap[0].artist,
        genre: beatmap[0].genre,
        language: beatmap[0].language,
        circle: Number(beatmap[0].objects.normal),
        slider: Number(beatmap[0].objects.slider),
        spinner: Number(beatmap[0].objects.spinner)
    }
}