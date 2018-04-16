import { Component } from "@angular/core";
import { Proposal } from "./proposal";

@Component({
    moduleId: module.id,
    selector: "proposal-list",
    templateUrl: "proposal-list.component.html"
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, "Zuleika, LLC", "https://portfolio.alicerose.com", "Ruby on Rails", 150, 120, 15, "alicerose@zuleika.com")
    proposalTwo: Proposal = new Proposal(99, "XYZ, LLC", "https://portfolio.xyz.com", "Ruby on Rails", 150, 120, 15, "alicerose@xyz.com")
    proposalThree: Proposal = new Proposal(300, "Something, LLC", "https://portfolio.something.com", "Ruby on Rails", 150, 120, 15, "alicerose@something.com")

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]
}