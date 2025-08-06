using Application.Activities.Commands;
using Application.Activities.DTO;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController(IMediator mediator) : BaseApiController
{
  [HttpGet]
  public async Task<ActionResult<List<Activity>>> GetActivities()
  {
    return await mediator.Send(new GetActivityList.Query());
  }
  [HttpGet("{id}")]
  public async Task<ActionResult<Activity>> GetActivityDetail(string id)
  {
    return HandleResult(await mediator.Send(new GetActivityDetails.Query { Id = id }));
  }
  [HttpPost]
  public async Task<ActionResult<string>> CreateActivity(CreateActivityDTO activityDto)
  {
    return HandleResult(await Mediator.Send(new CreateActivity.Command { ActivityDTO = activityDto }));
  }

  [HttpPut]
  public async Task<ActionResult> EditActivity(EditActivityDTO activity)
  {
    return HandleResult(await Mediator.Send(new EditActivity.Command { ActivityDTO = activity }));
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult> DeleteActivity(string id)
  {
    return HandleResult(await Mediator.Send(new DeleteActivity.Command { Id = id }));
  }
}
