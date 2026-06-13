using System;
using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles.Commands;

public class EditProfile
{
  public class Command : IRequest<Result<Unit>>
  {
    public required string DisplayName { get; set; } = string.Empty;
    public required string Bio { get; set; } = string.Empty;
  }

  public class Handler(AppDbContext dbContext, IUserAccessor userAccessor) : IRequestHandler<Command, Result<Unit>>
  {
    public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
    {

      var user = await userAccessor.GetUserAsync();

      if (request.DisplayName == string.Empty) return Result<Unit>.Failure("Display Name cannot be empty.", 400);

      user.DisplayName = request.DisplayName;
      user.Bio = request.Bio;

      dbContext.Entry(user).State = EntityState.Modified;

      var result = await dbContext.SaveChangesAsync(cancellationToken) > 0;

      return result
        ? Result<Unit>.Success(Unit.Value)
        : Result<Unit>.Failure("Problem updating profile", 400);
    }
  }
}
