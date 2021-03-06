'use strict';

let unlockLists = {
    tick: function() {
        unlockLists.checkUnlocks();
    },
    checkUnlocks: function() {
        unlockLists.check(1, levelData && levelData.home.units.length === 0);
        unlockLists.check(2, highestLevel >= 1);
        unlockLists.check(3, curLevel >= 1, ["kingLabel1", "kingLabel3", "optionsContainer"]);
        unlockLists.check(4, gold > 0, ["goldContainer", "castleLabel1", "woodContainer", "castleLabel3", "unitsToMove"]);
        unlockLists.check(5, highestLevel >= 2);
        unlockLists.check(6, curLevel >= 2, ["castleLabel2"]);
        unlockLists.check(7, created.altar > 0, ["favorContainer"]);
        unlockLists.check(8, soulC > 0, ["soulCContainer", "spearmanEmpowerButton", "archerEmpowerButton", "catapultEmpowerButton"]);

        unlockLists.check(14, king > 0,["directWorkerBonus"]);
        unlockLists.check(15, levelInitials[curLevel].initial.people > 0,["statLabel1", "statLabel2", "statLabel3"]);

        unlockLists.check(20, highestLevel >= 20,["heroesToMove"]);

        unlockLists.checkStory(0, true);
        unlockLists.checkStory(1, true);
        unlockLists.checkStory(2, true);
        unlockLists.checkStory(3, true);
        unlockLists.checkStory(4, true);
        unlockLists.checkStory(5, true);
        unlockLists.checkStory(6, true);
        initialUnlock = false;

        unlockLists.check(0, !unlockList[0]);
    },
    check: function(num, shouldUnlock, isMadeVisibleList) {
        if(shouldUnlock && (!unlockList[num] || initialUnlock)) {
            if(isMadeVisibleList) {
                for (let i = 0; i < isMadeVisibleList.length; i++) {
                    removeClassFromDiv(document.getElementById(isMadeVisibleList[i]), "hidden");
                }
            }
            if(!initialUnlock && tutorial[num]) {
                createTooltip(tutorial[num]);
            }
            unlockList[num] = true;
        }
    },
    checkStory: function(num, shouldUnlock) {
        if(unlockStory[num] === undefined && shouldUnlock) {
            unlockStory[num] = true;
            adjustStoryDivs();
        }
    }
};
