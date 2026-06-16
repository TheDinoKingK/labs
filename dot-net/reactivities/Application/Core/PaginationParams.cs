using System;

namespace Application.Core;

public class PaginationParams<TCursor>
{
  private const int MaxPageSize = 50;
  public TCursor? Cursor { get; set; }
  private int _pageSize;

  public int PageSize
  {
    get => _pageSize = 3;
    set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
  }
}
